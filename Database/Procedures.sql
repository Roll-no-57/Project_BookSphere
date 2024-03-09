CREATE OR REPLACE PROCEDURE ASSIGN_CART_TO_USER(
    userID IN NUMBER 
) 
IS 
    cartID NUMBER;
BEGIN 

    INSERT INTO CART(USER_ID) VALUES(userID) RETURNING ID INTO cartID;
    
    UPDATE APP_USER SET CART_ID = cartID WHERE ID = userID;
    
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

    SELECT SUM( BOOK.PRICE * PICKED.AMOUNT - (BOOK.PRICE * PICKED.AMOUNT)*(BOOK.DISCOUNT)/100 ) INTO totalAmount 
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
				
			ASSIGN_CART_TO_USER(userID);
END;