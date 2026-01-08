pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'jenkins', url: 'https://github.com/Jashwanthkoonuru/AI-enabled-Business-Management.git'
      }
    }

    stage('Build & Deploy') {
      steps {
        sh '''
          docker-compose down || true
          docker-compose build
          docker-compose up -d
        '''
      }
    }
  }
}
