USE punkrecords;

-- Insertar usuarios
INSERT INTO punkrecords.users (nickname, email, password, user_img) VALUES
('OtakuPunk', 'otakupunk@example.com', 'hashedpassword1', 'otakupunk.jpg'),
('MangaQueen', 'mangaqueen@example.com', 'hashedpassword2', 'mangaqueen.png'),
('AnimeSlayer', 'animeslayer@example.com', 'hashedpassword3', 'animeslayer.jpg'),
('ShonenMaster', 'shonenmaster@example.com', 'hashedpassword4', 'shonenmaster.png');

-- Insertar favoritos (anime y manga)
INSERT INTO punkrecords.favorites (media_name, media_id, media_type, finished, user_id) VALUES
-- OtakuPunk
('Attack on Titan', 201, 'anime', b'1', 1),
('Chainsaw Man', 202, 'manga', b'1', 1),
('Tokyo Revengers', 203, 'anime', b'0', 1),
('Death Note', 207, 'anime', b'1', 1),
('One Piece', 204, 'anime', b'0', 1),
('Demon Slayer', 213, 'anime', b'1', 1),
('Bleach', 209, 'manga', b'0', 1),

-- MangaQueen
('One Piece', 204, 'anime', b'1', 2),
('Berserk', 205, 'manga', b'1', 2),
('Sailor Moon', 206, 'anime', b'0', 2),
('Fruits Basket', 214, 'anime', b'1', 2),
('Vagabond', 211, 'manga', b'1', 2),
('Attack on Titan', 201, 'anime', b'1', 2),
('Chainsaw Man', 202, 'manga', b'0', 2),

-- AnimeSlayer
('Naruto', 208, 'anime', b'1', 3),
('Death Note', 207, 'anime', b'1', 3),
('Bleach', 209, 'manga', b'1', 3),
('My Hero Academia', 212, 'anime', b'0', 3),
('Tokyo Ghoul', 215, 'anime', b'0', 3),
('Black Clover', 216, 'anime', b'1', 3),
('Berserk', 205, 'manga', b'1', 3),

-- ShonenMaster
('Jujutsu Kaisen', 210, 'anime', b'1', 4),
('Dragon Ball Z', 217, 'anime', b'1', 4),
('One Piece', 204, 'anime', b'0', 4),
('Naruto', 208, 'anime', b'1', 4),
('Chainsaw Man', 202, 'manga', b'1', 4),
('Hunter x Hunter', 218, 'anime', b'0', 4),
('Bleach', 209, 'manga', b'1', 4);

-- Insertar reseñas
INSERT INTO punkrecords.reviews (rating, review, date, favorite_id) VALUES
(9, 'Una historia brutal que redefine el anime moderno.', '2025-04-21', 1),
(8, 'Mucha sangre y locura. Muy entretenido.', '2025-04-21', 2),
(10, 'Una joya. Cada capítulo te mantiene pegado.', '2025-04-22', 4),
(9, 'Visualmente espectacular y emotivo.', '2025-04-23', 6),

(10, 'El mejor anime de aventuras, sin duda.', '2025-04-21', 8),
(10, 'Oscuro y profundo. Un manga inolvidable.', '2025-04-22', 9),
(8, 'Muy emotivo y bien animado.', '2025-04-23', 11),
(10, 'Dibujos que parecen vivos. Vagabond es arte puro.', '2025-04-24', 12),
(9, 'Shingeki no Kyojin cambia las reglas del juego.', '2025-04-24', 13),

(4, 'Demasiado infantil para mi gusto.', '2025-04-24', 11), -- Reseña negativa en Fruits Basket
(5, 'Historia demasiado alargada, debería haber acabado antes.', '2025-04-24', 8), -- Reseña negativa en One Piece

(8, 'Gran historia, aunque con relleno.', '2025-04-21', 15),
(9, 'Una historia de mente maestra. Me voló la cabeza.', '2025-04-22', 16),
(6, 'Buen manga pero pierde fuerza a mitad.', '2025-04-22', 17),
(8, 'Típico shonen, pero muy divertido.', '2025-04-24', 20),
(9, 'Berserk nunca decepciona.', '2025-04-24', 21),

(9, 'Peleas brutales, animación top.', '2025-04-21', 22),
(7, 'Nostalgia pura, pero los combates siguen emocionando.', '2025-04-21', 23),
(8, 'Naruto tiene mucho corazón.', '2025-04-22', 25),
(8, 'Chainsaw Man es salvajemente divertido.', '2025-04-23', 26),
(7, 'Bleach me encanta, aunque la saga final decae.', '2025-04-24', 28);