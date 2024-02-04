 CREATE TABLE
    langages (
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