pipeline {
    agent {
        label "docker-agent"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Tonyrj3268/jenkins-practice.git'
            }
        }
        stage('Build and Test') {
            agent {
                docker {
                        image 'node:20-alpine'
                    }
            }
            steps {
                sh 'npm install'
                sh 'npx tsc'
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
