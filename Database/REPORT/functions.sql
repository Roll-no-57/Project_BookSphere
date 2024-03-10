CREATE OR REPLACE FUNCTION CALCULATE_DISCOUNT_AMOUNT(
    bookID IN NUMBER,
    amount IN NUMBER,
    userID IN NUMBER

) 
RETURN NUMBER
IS 
    discount NUMBER;
    price NUMBER;

BEGIN
    
    SELECT DISCOUNT INTO discount FROM BOOK WHERE ID = bookID ;
    SELECT PRICE INTO price FROM BOOK WHERE ID = bookID ;

    LOG_PROCEDURE_CALL('CALCULATE_DISCOUNT_AMOUNT', 'FUNCTION', userID, 'bookID: ' || TO_CHAR(bookID) || ', amount: ' || TO_CHAR(amount) || ', userID: ' || TO_CHAR(userID));

    RETURN amount * price * discount / 100;

END;



CREATE OF REPLACE FUNCTION CALCULATE_VOUCHER_DISCOUNT_AMOUNT(
    voucherID IN NUMBER,
    totalAmount IN NUMBER,
    userID IN NUMBER
)
RETURN NUMBER
IS 
    discount NUMBER;
BEGIN
        SELECT DISCOUNT INTO discount FROM VOUCHER WHERE ID = voucherID;

        LOG_PROCEDURE_CALL('CALCULATE_VOUCHER_DISCOUNT_AMOUNT', 'FUNCTION', userID, 'voucherID: ' || TO_CHAR(voucherID) || ', totalAmount: ' || TO_CHAR(totalAmount) || ', userID: ' || TO_CHAR(userID));

        RETURN totalAmount * discount / 100;
END;