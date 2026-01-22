pipeline {
    agent any

    environment {
        TELEGRAM_TOKEN = credentials('telegram-token')
        TELEGRAM_CHAT_ID = '5266216179'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/thantsin2024/node-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building app....
                docker build -t node-app .
                '''
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

    post {
        success {
            sh """
            curl -s -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage \
            -d chat_id=${TELEGRAM_CHAT_ID} \
            -d text="✅ Jenkins Build SUCCESS\nJob: ${JOB_NAME}\nBuild: #${BUILD_NUMBER}"
            """
        }

        failure {
        sh """
        curl -s -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage \
        -d chat_id=${TELEGRAM_CHAT_ID} \
        -d text="❌ Jenkins Build FAILED\nJob: ${JOB_NAME}\nBuild: #${BUILD_NUMBER}"
        """
        }
    }
}