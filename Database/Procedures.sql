CREATE OR REPLACE PROCEDURE ASSIGN_CART_TO_USER(
    userID IN NUMBER 
) 
IS 
    cartID NUMBER;
BEGIN 

    INSERT INTO CART(USER_ID) VALUES(userID) RETURNING ID INTO cartID;
    
    UPDATE APP_USER SET CART_ID = cartID WHERE ID = userID;
    
END;


CREATE OR REPLACE PROCEDURE CREATE_ORDER(

    userID IN NUMBER,
    cartID IN NUMBER,
    voucherID IN NUMBER,
    name IN VARCHAR2,
    address IN VARCHAR2,
    phone1 IN VARCHAR2,
    phone2 IN VARCHAR2,
    state IN VARCHAR2,
    payment_method IN VARCHAR2,


) IS 
    totalItem NUMBER;
    totalAmount NUMBER;
    voucherDiscount NUMBER;

BEGIN 

    SELECT SUM(PRICE * AMOUNT ) INTO totalAmount FROM PICKED WHERE CART_ID = CARTID;

    SELECT SUM(AMOUNT) INTO totalItem FROM PICKED WHERE CART_ID = CARTID;

    if voucherID is not null then 
        SELECT DISCOUNT INTO voucherDiscount FROM VOUCHER WHERE ID = voucherID;
        totalAmount := totalAmount - (totalAmount * voucherDiscount / 100);
    end if ;


    INSERT INTO BOOK_ORDER(USER_ID, CART_ID, VOUCHER_ID ,
    NAME, PHONE1, PHONE2, ADDRESS , TOTAL_PRICE,  TOTAL_ITEM ,STATE , PAYMENT_METHOD)
    VALUES (userID, cartID, voucherID, name,phone1,phone2,
    address, totalAmount, totalItem, state, payment_method);

    ASSIGN_CART_TO_USER(userID);    

END;
