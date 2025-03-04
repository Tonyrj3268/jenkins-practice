pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Tonyrj3268/jenkins-practice.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npx tsc'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Docker Build & Push') {
            steps {
                sh 'docker build -t chiachenglin/k8s-web-hello:latest .'
                sh 'docker push chiachenglin/k8s-web-hello:latest'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}
