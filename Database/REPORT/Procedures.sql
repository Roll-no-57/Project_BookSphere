CREATE OR REPLACE PROCEDURE "C##APURBO".LOG_PROCEDURE_CALL(
    procedure_name IN VARCHAR2,
    type_name IN VARCHAR2,
    user_id IN NUMBER,
    parameters IN VARCHAR2
) IS 
BEGIN 
    INSERT INTO procedure_function_log (pl_name, type_name, user_id, call_timestamp, parameters)
    VALUES (procedure_name, type_name, user_id, CURRENT_TIMESTAMP, parameters);
END;



CREATE OR REPLACE PROCEDURE "C##APURBO".ASSIGN_CART_TO_USER(
    userID IN NUMBER 
) 
IS 
    cartID NUMBER;
BEGIN 

    INSERT INTO CART(USER_ID) VALUES(userID) RETURNING ID INTO cartID;
    
    UPDATE APP_USER SET CART_ID = cartID WHERE ID = userID;

    LOG_PROCEDURE_CALL('ASSIGN_CART_TO_USER', 'PROCEDURE', userID, 'userID: ' || TO_CHAR(userID));
    
END;





CREATE OR REPLACE PROCEDURE "C##APURBO".CREATE_ORDER(

    userID IN NUMBER,
    cartID IN NUMBER,
    voucherID IN NUMBER,
    name IN VARCHAR2,
    address IN VARCHAR2,
    phone1 IN VARCHAR2,
    phone2 IN VARCHAR2,
    state IN VARCHAR2,
    payment_method IN VARCHAR2

) IS 

    totalItem NUMBER;
    totalAmount NUMBER;
    voucherDiscount NUMBER;
		
BEGIN 

    SELECT SUM(BOOK.PRICE * PICKED.AMOUNT ) INTO totalAmount 
		FROM PICKED JOIN BOOK ON BOOK.ID = PICKED.BOOK_ID 
		WHERE PICKED.CART_ID = cartID;

    SELECT SUM(PICKED.AMOUNT) INTO totalItem FROM PICKED WHERE PICKED.CART_ID = cartID;

    IF voucherID IS NOT NULL THEN 
        SELECT DISCOUNT INTO voucherDiscount FROM VOUCHER WHERE ID = voucherID;
        totalAmount := totalAmount - (totalAmount * voucherDiscount / 100);
    END IF;

    INSERT INTO BOOK_ORDER(CART_ID, VOUCHER_ID ,
        NAME, PHONE1, PHONE2, ADDRESS , TOTAL_PRICE,  TOTAL_ITEM ,STATE , PAYMENT_METHOD)
    VALUES (cartID, voucherID, name, phone1, phone2,
        address, totalAmount+50, totalItem, state, payment_method);
		
       
-- Log the procedure call
    LOG_PROCEDURE_CALL('CREATE_ORDER', 'PROCEDURE', userID, 'userID: ' || TO_CHAR(userID) || ', cartID: ' || TO_CHAR(cartID) || ', voucherID: ' || TO_CHAR(voucherID) || ', name: ' || name || ', address: ' || address || ', phone1: ' || phone1 || ', phone2: ' || phone2 || ', state: ' || state || ', payment_method: ' || payment_method);
       
	ASSIGN_CART_TO_USER(userID);
		
END;

