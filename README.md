# Unyte task

### `yarn test`

Launch the unit tests on the app using the command below:

```bash
yarn test
```

## Running the application locally on Docker

To run the application in docker, first you need to have docker installedd in your computer.

**[Install Docker here](https://docs.docker.com/desktop/install/windows-install/)**

The docker file to run the container is already available.

Build the docker image by running the following command:

```bash
docker build -t unytetask .
```

Run the following command to start the application server:

```bash
docker run -p 80:80 unytetask
```

Thereafter you can visit [http://localhost:80](http://localhost:80) on your browser to preview the application
