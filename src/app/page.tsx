import { Code, Terminal } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Kubernetesテスト環境</h1>
        <p className="text-gray-600">K8s勉強用の簡易リファレンス</p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Terminal className="h-5 w-5 mr-2" />
            基本コマンド
          </h2>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`# クラスター情報の確認
kubectl cluster-info

# ノード一覧の表示
kubectl get nodes

# 全てのリソースの表示
kubectl get all

# ポッドの作成
kubectl run nginx --image=nginx

# デプロイメントの作成
kubectl create deployment nginx --image=nginx

# サービスの公開
kubectl expose deployment nginx --port=80 --type=NodePort

# ログの表示
kubectl logs <pod-name>

# ポッドの詳細情報
kubectl describe pod <pod-name>

# リソースの削除
kubectl delete pod <pod-name>
kubectl delete deployment <deployment-name>
kubectl delete service <service-name>`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2" />
            YAML例
          </h2>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`# シンプルなNginxデプロイメント
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80

---
# Nginxサービス
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
  type: ClusterIP`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ローカル環境セットアップ</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Minikubeのインストール:</strong>
              <div className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">
                <code>brew install minikube</code> (Mac) または
                <br />
                <code>choco install minikube</code> (Windows)
              </div>
            </li>
            <li>
              <strong>kubectlのインストール:</strong>
              <div className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">
                <code>brew install kubectl</code> (Mac) または
                <br />
                <code>choco install kubernetes-cli</code> (Windows)
              </div>
            </li>
            <li>
              <strong>クラスターの起動:</strong>
              <div className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">
                <code>minikube start</code>
              </div>
            </li>
            <li>
              <strong>ダッシュボードの起動:</strong>
              <div className="bg-gray-100 p-2 rounded-md mt-1 overflow-x-auto">
                <code>minikube dashboard</code>
              </div>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">主要概念</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Pod:</strong> Kubernetesの最小単位。1つ以上のコンテナのグループ。
            </li>
            <li>
              <strong>Deployment:</strong> Podの作成と更新を管理。レプリカ数の指定やローリングアップデートが可能。
            </li>
            <li>
              <strong>Service:</strong> Podへのネットワークアクセスを提供。固定IPアドレスとDNS名を割り当て。
            </li>
            <li>
              <strong>ConfigMap/Secret:</strong> 設定情報や機密情報をPodに提供。
            </li>
            <li>
              <strong>Namespace:</strong> クラスター内のリソースをグループ化する仮想的な区画。
            </li>
            <li>
              <strong>PersistentVolume:</strong> データの永続化のためのストレージリソース。
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 pt-4 border-t text-sm text-gray-500">
        <p>個人的なK8s勉強用リファレンス - 2025</p>
      </footer>
    </div>
  )
}
