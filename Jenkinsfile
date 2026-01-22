pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thantsin2024/node-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-jenkins-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                -p 3000:3000 \
                --name node-app \
                node-jenkins-app
                '''
            }
        }
    }
}