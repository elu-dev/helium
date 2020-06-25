CREATE DATABASE helium;
USE helium;

-- TABLES:
-- users (nickname, email, password, join_date)
-- posts (id, user_nick, img_url, text, post_date)
-- follows (follower_nick, followee_nick)
-- likes (user, post_id)

-- get the feed for user id = 5
select * from posts p
    join follows f on f.followee_id = u.id
where f.follower_id = 5


CREATE TABLE users (
    nickname   VARCHAR(50) PRIMARY KEY,
    email      VARCHAR(50) UNIQUE NOT NULL,
    password   VARCHAR(255) NOT NULL,
    join_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id          SERIAL PRIMARY KEY,
    user_nick   VARCHAR(50) NOT NULL,
    img_url     VARCHAR(255) NOT NULL,
    content     TEXT NOT NULL,
    post_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_posts_users FOREIGN KEY (user_nick)
        REFERENCES users (nickname)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE follows (
    followee_nick VARCHAR(50) NOT NULL,
    follower_nick VARCHAR(50) NOT NULL,

    CONSTRAINT fk_followee FOREIGN KEY (followee_nick)
        REFERENCES users (nickname)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_follower FOREIGN KEY (follower_nick)
        REFERENCES users (nickname)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE likes (
    post_id integer NOT NULL,
    user_nick VARCHAR(50) NOT NULL,

    CONSTRAINT fk_likes_post_id FOREIGN KEY (post_id)
        REFERENCES posts (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_likes_user FOREIGN KEY (user_nick)
        REFERENCES users (nickname)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);