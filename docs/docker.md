# Docker Commands
Notes

## List-La-List

List all containers:
```bash
docker ps -a
```
```bash
# Output
CONTAINER ID        IMAGE                        COMMAND             CREATED             STATUS              PORTS               NAMES
4fbc3d80b884        908b4685da3d                 "/bin/sh"           2 minutes ago       Up 2 minutes                            thirsty_engelbart
7bc6df6add8e        flavioespinoza/alpine-node   "/bin/sh"           2 minutes ago       Up 2 minutes                            elated_goodall
```

List containers with selected headers:
- `CONTAINER ID`, `STATUS`, `NAMES`, and `NETWORKS`
```bash
docker container ls --all --format 'table {{.ID}}\t{{.Status}}\t{{.Names}}\t{{.Networks}}' 
```
```bash
# Output
CONTAINER ID        STATUS              NAMES               NETWORKS
4fbc3d80b884        Up 5 minutes        thirsty_engelbart   bridge
7bc6df6add8e        Up 5 minutes        elated_goodall      bridge
```

## Kill-La-Kill
`docker` kill and delete commands for [containers](https://github.com/wsargent/docker-cheat-sheet#kill-running-containers) and [images](https://github.com/wsargent/docker-cheat-sheet#delete-dangling-images).

### stop running containers
```bash
docker kill $(docker ps -q)
```

### stop running containers and delete all containers
```bash
docker rm -f $(docker ps -qa)
```

### delete all images
```bash
docker rmi $(docker images -q)
```


## Run-Forest-Run
Run docker container from `Image ID` or `Repository` with designated container name:
```bash
docker run -td --name 'MY_CONTAINER_NAME' 'IMAGE_ID'

or 

docker run -td --name 'MY_CONTAINER_NAME' 'REPOSITORY'
```

**NOTE**: Use `-td` tag to keep container up and running:
```bash
docker run -td --name 'my_awesome_node_container' 'flavioespinoza/alpine-node'
```



### run from image

List images:
```bash
docker images
```
```bash
# Output
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
flavioespinoza/alpine-node   latest              908b4685da3d        2 minutes ago       43.9MB
```

##### run from `image ID`:
```bash
docker run -td --name 'Node_Brains' '908b4685da3d'
```

##### run from `repository` name:
```bash
docker run -td --name 'Node_Balls' 'flavioespinoza/alpine-node'
```

##### list containers:
```bash
docker container ls --all --format 'table {{.ID}}\t{{.Status}}\t{{.Names}}\t{{.Networks}}' 
```
```bash
CONTAINER ID        STATUS              NAMES               NETWORKS
f2ac06425f0f        Up 14 seconds       Node_Balls          bridge
6e2f31ac09c3        Up 8 minutes        Node_Brains         bridge
```

## Enter the Matrix
Enter `running` `docker` `containers` to setup and install your `GitHub` projects:
```bash
docker exec -ti 'CONTAINER_NAME' sh

or 

docker exec -ti 'CONTAINER_ID' sh
```
#### list containers
```bash
docker container ls --all --format 'table {{.ID}}\t{{.Status}}\t{{.Names}}\t{{.Networks}}' 
```
```bash
CONTAINER ID        STATUS              NAMES               NETWORKS
f2ac06425f0f        Up 14 seconds       Node_Balls          bridge
6e2f31ac09c3        Up 8 minutes        Node_Brains         bridge
```

#### enter running with Container Name:
```bash
docker exec -ti Node_Balls sh


docker exec -ti example-webapp sh
```

#### enter running with Container ID:
```bash
docker exec -ti f2ac06425f0f sh
```

#### verify node and npm installation
```bash
node --version && npm --version
```
```bash
# Output
v10.16.0
6.9.0
```


# GitHub - New Repository

```bash
echo "# commands" >> README.md
git init
git add README.md
git status
git add .
git commit -m "first commit"
git remote add origin https://github.com/flavioespinoza/commands.git
git push -u origin master
```

## Checount Remote Branch


```bash
git checkout --track origin/jwt
```

