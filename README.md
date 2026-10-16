# Dilawar Greeting action

Dedicated JavaScript action for Dilawar Khalid, SAP 49085.

Uses `@actions/core` and `@actions/github`. Build with `npm ci && npm run build`.
The committed `dist/index.js` and `dist/package.json` are the ncc distribution;
consumers do not install dependencies. Runtime: Node.js 24.

```yaml
- uses: medilawer/devops-custom-action-49085@v1.0.0
  with:
    name: Dilawar Khalid
```

Output `message`: `Hello Dilawar Khalid!`. The action also logs the triggering actor.
