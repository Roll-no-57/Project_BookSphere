CREATE OR REPLACE PROCEDURE REVIEW_BOOK(BID IN NUMBER, UID IN NUMBER, STAR IN NUMBER, REVIEW_MSG IN VARCHAR2 ) IS
    hasRated  NUMBER;
    hasBought NUMBER;
    ISTAR NUMBER;
BEGIN
    SELECT COUNT(*)
    INTO hasRated
    FROM RATES
    WHERE user_id = UID
      AND book_id = BID;

    SELECT COUNT(*)
    INTO hasBought
    FROM picked
             JOIN cart ON cart.id = picked.cart_id and cart.user_id = UID
             JOIN book_order on book_order.cart_id = cart.id and book_order.state = 5
    WHERE book_id = BID;
    ISTAR := ROUND(STAR,0);
    IF hasRated = 0 AND hasBought <> 0 AND STAR > 0 AND STAR <=5 THEN

        INSERT INTO RATES(user_id,book_id,stars,review)
        VALUES(UID,BID,ISTAR,REVIEW_MSG);
        DBMS_OUTPUT.PUT_LINE('inserted review');
    ELSE
        DBMS_OUTPUT.PUT_LINE('can not review');
    end if;

end;
