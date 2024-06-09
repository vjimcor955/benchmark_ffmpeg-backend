# Benchmark FFmpeg - Backend

> [!NOTE]
> This is one of the 3 repos involved in this project:
> * [Video Processor](https://github.com/vjimcor955/benchmark_ffmpeg-video_processor.git)
> * [Frontend](https://github.com/vjimcor955/benchmark_ffmpeg-frontend)
> * Backend

* Frontend deployment: https://ffmpegbenchmark.netlify.app/#/
* Backend deployment: https://ffmpeg-benckmark-api-646aff7ac349.herokuapp.com/

* [Complete project documentation](https://docs.google.com/document/d/1BiLZMec3593rihFXTcNCVjMaDec9oPi9uthvoekkeUc/edit?usp=sharing)

## Requirements

  - [Node.js](https://nodejs.org/)
  - [Docker](https://www.docker.com/products/docker-desktop/)

## Instalation for development

### Verify Node.js Installation:

&nbsp;&nbsp;&nbsp;&nbsp;First, make sure Node.js is installed on your device with the command:
```
node -v
``` 
&nbsp;&nbsp;&nbsp;&nbsp;If it is not installed you can install it from the [official Node.js website](https://nodejs.org/).

### Verify Docker is running:

&nbsp;&nbsp;&nbsp;&nbsp;In the next step we must make sure that Docker is running on the machine. In case you don't have Docker installed you can install Docker Desktop from [the official Docker website](https://www.docker.com/products/docker-desktop/).

### Clone the Project Repository:

&nbsp;&nbsp;&nbsp;&nbsp;Clone the Backend repository from GitHub. You can clone it either from the IDE or using git clone:
```
git clone https://github.com/vjimcor955/benchmark_ffmpeg-backend.git
```

### Build the app and run it:

&nbsp;&nbsp;&nbsp;&nbsp;Finally, access the directory where the repository has been cloned and enter the commands to build and run the containers with the necessary tools (MySQL, PhpMyAdmin and the application).
```
docker-compose build // Build the app
docker-compose up    // Run the containers
```

---

Developed by Víctor Jiménez Corada - [GitHub](https://github.com/vjimcor955).
