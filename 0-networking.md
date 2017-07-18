## Intro a Networking

### Linea de comandos
Interfaz textual que envía comandos al sistema operador del computador. Permite usar un computador "headless": sin un display y sin interfaz gráfica, o desde otro lugar.

Ejemplos:
* Bash (Unix, Linux, OSX Terminal)
* Cmd.exe (Windows)
* MS-DOS

Un comando generalmente tiene la estructura de:
```
$ <comando> <parámetros>
```
### ping
Un "packet" es un pedazo muy pequeño de información. Se puede usar el comando 'ping' para probar la conectividad de una red. El comando envia un packet a otro lugar, y mide el tiempo que se demora en devolver.
```
$ ping www.google.com
```
### IP
Cada dispositivo en la red tiene una dirección, asignado por el router (en una red local), o por DNS (red global).

Para encontrar el IP en la red local:
Linux/OSX:
```
$ ifconfig
```
Windows:
```
$ ipconfig  
```
la informacion despues de "inet" es el IPv4. e.g. 192.168.0.8
Se puede usar esa informacion para enviar un packet en la red local:
```
$ ping <IPv4>
```
e.g.
```
$ ping 192.168.0.8
```
Cualquier computador puede ser un servidor (lo que está escuchando para conexiones), y puede ser un cliente (lo que inicia una conexión)

### Ports
El computador puede tener various procesos a la vez. El "port" es el numero entre 1 y 65535 que se usa para diferenciar entre procesos.

### Protocolos - TCP y UDP
Toda la información enviado por red usa unos protocolos que se llama TCP y UDP.
UDP - video, audio, algunos juegos
TCP - sitios web, archivos, correo, todo lo demas

Para enviar informacion TCP desde la linea de comandos, se puede usar una herramienta que se llama netcat.

Escuchar para información en el port 5000 (servidor):
```
$ nc -l 5000
```
Abre otro terminal, y enviar informacion al servidor desde el mismo compu:
```
$ nc localhost 5000
```
Escribe mensajes en cada terminal y verlos en la otra session.
ctrl+c para parar un servicio

Para comunicar con otro computador en la red local, se puede usar la direccion IP. En compu 1:
```
$ nc -l 5000
```
En compu 2:
```
$ nc <IP de compu 1> 5000
```
e.g.
```
$ nc 192.168.0.8
```
### Protocolos
Varios protocolos usan TCP como base para intercambiar información:
* HTTP - browse web pages
* HTTPS - browse web pages with encryption
* SMTP - send and receive emails
* IMAP, POP3 - load emails from an inbox
* IRC - chat
* FTP - file transfer
* SSH - remote shell over an encrypted connection
* SSL - low-level secure data transfer (used by HTTPS)

### HTTP
Otro protocolo. HTTP (Hypertext Transfer Protocol) es como comunican navegadores y servidores web.
Para recibir información de un sitio web:

```
$ nc google.com 80
GET / HTTP/1.0
Host: google.com


```
Oprima 'enter' dos veces despues de "Host: google.com"

### Inspeccionando trafico de la red
Leer todo el trafico en una red
```
$ sudo tcpdump -X
```

Mostrar la ruta de un packet para llegar a su destino:
```
$ traceroute www.google.com
$ traceroute www.javeriana.edu.co
```
### Mas información
Invisible Infrastructures - The Exciting Life of Internet Packet https://labs.rs/en/packets/  
Cyberwizard Institute - networking https://github.com/cyberwizardinstitute/workshops/blob/master/networks.markdown  
Julian Oliver - Transparency Grenade https://transparencygrenade.com/