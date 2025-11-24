# Spring Tool Suite On WSL2

## Install Java

```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
```

---

## Download and Install STS

- Download STS

```bash
wget https://download.springsource.com/release/STS4/4.23.1.RELEASE/dist/e4.29/spring-tool-suite-4-4.23.1.RELEASE-e4.29-linux.gtk.x86_64.tar.gz
```

- Extract File

```bash
tar -xzf spring-tool-suite-4-*.tar.gz
```

- Move to folder

```bash
sudo mv sts-4* /opt/sts
```

- Create Desktop Icon
  Right click on Desktop => New => Shorcut:

```target
wsl -e env DISPLAY=:0 GDK_BACKEND=x11 /opt/sts/SpringToolSuite4
```

---

## Add Lombok Inside To STS

- Download [Lombok](https://projectlombok.org/download)
- Run Lombok Installer

```bash
java -jar ~/Downloads/lombok.jar
```

- Config project to use Lombok

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
    <scope>provided</scope>
</dependency>
```
