CREATE OR REPLACE TRIGGER ADD_REVIEW
AFTER INSERT
ON RATES
FOR EACH ROW
DECLARE

BEGIN
    UPDATE BOOK SET STAR = STAR + :NEW.STARS,REVIEW_COUNT = REVIEW_COUNT+1
    WHERE ID = :NEW.BOOK_ID;
end;



CREATE OR REPLACE TRIGGER UPDATE_REVIEW
AFTER UPDATE
OF STARS
ON RATES
FOR EACH ROW
DECLARE

BEGIN
    UPDATE BOOK SET STAR = STAR + (:NEW.STARS-:OLD.STARS)
    WHERE ID = :NEW.BOOK_ID;
end;


CREATE OR REPLACE TRIGGER UPDATE_STOCK
AFTER INSERT
ON BOOK_ORDER
FOR EACH ROW
DECLARE

    cartID NUMBER;


BEGIN

    cartID := :NEW.CART_ID;

    FOR R IN (SELECT * FROM PICKED WHERE CART_ID = cartID) 
    LOOP
        UPDATE BOOK SET STOCK = STOCK - R.AMOUNT WHERE ID = R.BOOK_ID;
    END LOOP;
END;
