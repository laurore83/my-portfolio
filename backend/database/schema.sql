 CREATE TABLE
    langages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
    );
 CREATE TABLE
    projets (
        id INT AUTO_INCREMENT PRIMARY KEY,
            type_id VARCHAR(255),
        title VARCHAR(255),
        img VARCHAR(255),
        txt VARCHAR(2000),
            lien_github VARCHAR(255)
    );
     CREATE TABLE
    types (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
      
    );
     CREATE TABLE
    frameworks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
      
    );
     CREATE TABLE
    librairies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
      
    );
    
    CREATE TABLE
    outils (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
      
    );

    INSERT INTO langages(id, name) VALUES(3,"html"),(2,"css");
    INSERT INTO types(id, name) VALUES(3,"html"),(2,"css");