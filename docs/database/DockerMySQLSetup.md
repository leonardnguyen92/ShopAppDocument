# MYSQL WITH DOCKER CONTAINER

## Setup Mysql Container

- Download image MySQL

```bash
sudo docker pull mysql:8.0.33
```

- Create folder to save data

```bash
mkdir -p ~/mysql-data
```

- Run MySQL container

```bash
sudo docker run -d \
  --name mysql8 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e MYSQL_DATABASE=shopapp \
  -p 3306:3306 \
  -v ~/mysql-data:/var/lib/mysql \
  mysql:8.0.33
```

NOTE:

- MYSQL_ROOT_PASSWORD: root password
- MYSQL_DATABASE: create default database
- -p 3306:3306: port expose
- -v ~/mysql-data:/var/lib/mysql: save data to restart without losing DB

- Test container

```bash
sudo docker ps
```

- Access MySQL from terminal

```bash
sudo docker exec -it mysql8 mysql -u root -p
```

- Connect to MySQL from DBeaver
  | Key | Value |
  |----------|----------|
  | Host | 127.0.0.1|
  | Port | 3306 |
  | User | root |
  | Password | 123456 |
  | Database | mydb |

- Stop MySQL

```bash
sudo docker stop mysql8
```

- Start MySQL

```bash
sudo docker start mysql8
```

- Reset password

```bash
sudo docker exec -it mysql8 mysql -u root -p
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'mypass';
```
