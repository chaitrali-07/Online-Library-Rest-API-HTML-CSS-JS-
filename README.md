## 👩‍💻 Developer Group

This project was developed by:

| Developer           | GitHub Profile |
|---------------------|----------------|
| Chaitrali Diwanji   | [chaitrali-07] |
| Priya Telange       | [priya-02]     |
---
#  Online Library System

An **Online Library Management System** built with:
- **Backend**: Spring Boot + REST API + JPA + Hibernate + PostgreSQL
- **Frontend**: HTML, CSS, JavaScript
- **IDE**: Spring Tool Suite (STS)

This project allows users to:
- View all books in the library
- Borrow and return books
- Add new books with quantity and genre
- Manage book inventory in real-time

---

##  Features

- **Book List Display**  
  View all available books along with their title, author, quantity, and genre.

- **Add New Books**  
  Add books via a simple form in the frontend (landscape layout).

- **Borrow Books**  
  Quantity decreases when a book is borrowed.  
  Borrow button is only active if the quantity is greater than 0.

- **Return Books**  
  Return a borrowed book, increasing the quantity.

- **Genre Categorization**  
  Books are displayed based on genre for easier browsing.

---

##  Tech Stack

**Backend**
- Spring Boot
- Spring Data JPA (Hibernate)
- REST API
- PostgreSQL (configurable)

**Frontend**
- HTML5
- CSS3
- JavaScript (Fetch API)

**Tools**
- Spring Tool Suite (STS)
- Git & GitHub

---

## Configure Database
    spring.application.name=VirtualLibrary
    spring.datasource.url=jdbc:postgresql://localhost:5432/Library_DB
    spring.datasource.username=postgres
    spring.datasource.password=12345
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
---
## Snapshots

<img width="1366" height="768" alt="Screenshot (133)" src="https://github.com/user-attachments/assets/1c1f735d-1f7d-4688-b369-95cd9647e0c5" />
<img width="1366" height="768" alt="Screenshot (132)" src="https://github.com/user-attachments/assets/eccfa7fd-e731-4e35-9883-5a863fa9f883" />
<img width="1366" height="768" alt="Screenshot (134)" src="https://github.com/user-attachments/assets/15c51f39-2372-47c9-9a89-e2d6fe76bc03" />
<img width="1366" height="768" alt="Screenshot (135)" src="https://github.com/user-attachments/assets/531b128e-3b5d-4863-ac7d-632770bbcac1" />
<img width="1366" height="768" alt="Screenshot (123)" src="https://github.com/user-attachments/assets/8298bf47-d865-434c-9515-2abff6409c5d" />
