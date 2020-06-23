CREATE DATABASE helium;
USE helium;

-- TABLES:
-- users (id, username, pwd, join_date)
-- posts (id, user_id, img_url, text, post_date)
-- follows (follower_id, followee_id)
-- likes (user_id, post_id)

-- get the feed for user id = 5
select * from posts p
    join follows f on f.followee_id = u.id
where f.follower_id = 5


CREATE TABLE users (
    id         SERIAL PRIMARY KEY,
    nickname   VARCHAR(50) UNIQUE NOT NULL,
    email      VARCHAR(50) UNIQUE NOT NULL,
    password   VARCHAR(50) NOT NULL,
    join_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id          SERIAL PRIMARY KEY,
    user_id     integer NOT NULL,
    img_url     VARCHAR(255) NOT NULL,
    content     TEXT NOT NULL,
    post_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    
    CONSTRAINT fk_posts_users FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE follows (
    followee_id integer NOT NULL,
    follower_id integer NOT NULL,

    CONSTRAINT fk_follower_followee FOREIGN KEY (followee_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_follower_follower FOREIGN KEY (follower_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE likes (
    post_id integer NOT NULL,
    user_id integer NOT NULL,

    CONSTRAINT fk_likes_post_id FOREIGN KEY (post_id)
        REFERENCES posts (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_likes_user_id FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);