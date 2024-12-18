module.exports = {
  snippets: [
    {
      label: "React useState",
      description: "Import and use React useState hook",
      body: "const [${1:state}, set${1:State}] = useState(${2:initialValue});",
      scope: "typescript,javascript,typescriptreact,javascriptreact",
      package: "react",
      requiredImports: [{
        packageName: "react",
        namedExports: ["useState"]
      }]
    },
    {
      label: "React useEffect",
      description: "Import and use React useEffect hook",
      body: "useEffect(() => {\n${2:body}\n}, [])",
      scope: "typescript,javascript,typescriptreact,javascriptreact",
      package: "react",
      requiredImports: [{
        packageName: "react",
        namedExports: ["useEffect"]
      }]
    },
    {
      label: "React useMemo",
      description: "Import and use React useMemo hook",
      body: "useMemo(() => {\n${2:body}\n}, [])",
      scope: "typescript,javascript,typescriptreact,javascriptreact",
      package: "react",
      requiredImports: [{
        packageName: "react",
        namedExports: ["useMemo"]
      }]
    },
    {
      label: "React TS Component",
      description: "React Typescript component",
      body: "interface I${1:ComponentName} {}\nexport const ${1:ComponentName}: React.FC<I${1:ComponentName}> = () => {\n\treturn (\n\t${2:<div>}</div>\n\t);\n}",
      scope: "typescriptreact",
      package: "react",
      requiredImports: [
        {
          packageName: "react",
          defaultImport: "React"
        },
      ]
    },
  ]
};
