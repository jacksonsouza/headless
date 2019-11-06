 Deployment instructions for jsouza.co "portfolio"

 I am hoping to stop using this theme and Ghost.js in general for my portfolio site, in favor of a series of static pages.
 In the mean time, here are instructions for SSH and FTP to the running EC2 instance in US West Oregon.



 SSH

 ssh -i "ghost.pem" ubuntu@ec2-XXXXXXX.us-west-2.compute.amazonaws.com
 this theme exists at /opt/bitnami/apps/ghost/htdocs/content/themes/headless

 FTP using Filezilla

 If ghost.pem is not availible on your machine, you may need to assign a new key pair to the EC2 instance
 Add the SFTP key in Filezilla
 Add a new site through the Site Manager
  SFTP
  host is Public DNS iPv4 on EC2
  logon type is Normal
  user is "ubuntu"
  no password

