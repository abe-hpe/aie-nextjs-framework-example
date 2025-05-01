## A basic 'Hello World' NextJS app and Helm chart for deployment as a custom framework on HPE AI Essentials.
The app showcases the Oauth2 SSO functionality provided by AI Essentials.

In the app source directory, build the app with 'docker build .' then tag and push the resulting image as needed.
In the helm chart directory, update values.yaml to reflect the image that you tagged and pushed.
In the root directory:
```
tar -cvzf my-helm-chart.tar.gz helm-chart/
```
Upload my-helm-chart.tar.gz as a custom framework in the AIE UI and fill out all the other required data (you need to provide a PNG thumbnail icon for your app!)
