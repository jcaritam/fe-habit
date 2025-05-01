pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  tools {
    nodejs 'NodeJS-LTS'
  }

  stages {
    stage('checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/jcaritam/fe-habit.git'
      }
    }

    stage('install') {
      steps {
        sh 'yarn install  --frozen-lockfile --non-interactive'
      }
    }

    stage('build') {
      steps {
        sh 'yarn build'
      }
    }

  }

  post {
    success {
      echo 'Build completed successfully!'
    }

    failure {
      echo 'Build failed!'
    }
  }
}