## A basic 'Hello World' NextJS app and Helm chart for deployment as a custom framework on HPE AI Essentials.
The app showcases the Istio ingress and Oauth2 SSO functionality provided by AI Essentials for apps added using the 'Custom Frameworks' feature.

The app source directory contains the code and dockerfile for a simple NextJS app. In the app source directory, build the app with 'docker build .' then tag and push the resulting image as needed.
The helm chart directory contains a helm chart whose values.yaml contains a cusom 'ezua' section and whose templates (in the templates dir) are created to match the requirements of the app (a simple deployment with a service and a virtual service). You can customize this to your needs. There is no dependency between the contents of the app src dir and the helm chart dir apart from the name of the image used in values.yaml and the internal service port, so you can use the helm chart example to deploy whatever other image you want.

Clone the repo, then from the root dir:
```
tar -cvzf my-helm-chart.tar.gz helm-chart/
```
Upload my-helm-chart.tar.gz as a custom framework in the AIE UI and fill out all the other required data (you need to provide a PNG thumbnail icon for your app!)
