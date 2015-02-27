# sails-project #

a [Sails](http://sailsjs.org) application


1. couchbase
2. elasticsearch
3. node
4. sails
5. express
6. passport


##install dependencies##
<code>

  sails new sails-project<br/> 
  cd sails-project<br/>
  npm install sails-generate-auth<br/>
  sails generate auth<br/>
  npm install passport<br/>
  npm install passport-local<br/>
  npm install passport-twitter<br/>
  npm install passport-facebook<br/>
  npm install passport-github<br/>
  npm install passport-google-auth<br/>
  npm install validator<br/>
  npm install bcryptjs<br/>
  </code>
  
  <p> update the model to use our <code>connection:'cbse'</code></p>
  
  <h3>update the connection and configure couchbase and elastic search</h3>
  <code>
    cbes: {
    //couchbase
    cb:{
        host: 'localhost',
        port: 8091,
        user: 'admin',
        pass: 'password',
    
        bucket: {
            name: 'sails',
            pass: 'sails'
        }
      },
    //elasticsearch   
    es: {
        host: ['127.0.0.1:9200'],
        log: 'error',
        index: 'sails',
        numberOfShards: 5,
        numberOfReplicas: 1
    },
    adapter: 'sails-cbes'
  }
  </code>
