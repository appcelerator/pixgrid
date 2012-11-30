NODE ACS, photo app demo
=========================
This is a sample photo uploader web app built with Node.ACS's MVC Framework(http://nodeacs.cloud.appcelerator.com/guides/mvc). It uses ACS(https://www.appcelerator.com/cloud) as backend to store user information and photos. 

Instructions:

1. Install Node.ACS client tool (http://nodeacs.cloud.appcelerator.com/guides/quickstart)

```
   # sudo npm -g install acs
```

2. Login with Node.ACS using your appcelerator.com developer account(free to signup)

```
   # acs login
```

3. Create an app with Node.ACS

```
   # acs new pixgrid
```

  The above command will create a folder named pixgrid under your current directly
 
4. Download Pixgrid source code and copy over the contents to the newly created pixgrid directory
  
```
   # cp -r <download dir>/pixgrid/* ./pixgrid 
```

5. Create an ACS app and obtain the oauth key and oauth secret

6. Modify pixgrid/app.js line 8 to fill in the ACS credientials

```
   ACS.init('OAUTH_KEY', 'OAUTH_SECRET_KEY'); // on line 8
```

7. Test locally

```
   # cd pixgrid
   # acs run 
```
   
8 Publish to Node.ACS cloud

```
   # cd pixgrid (If you haven't done it yet)
   # acs publish 
```
   You will get a published link and your app is running in Node.ACS cloud!

