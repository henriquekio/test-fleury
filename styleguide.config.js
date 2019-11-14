module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Global Components',
      components: 'src/components/**/*.js'
    },
    {
      name: 'View Components',
      content: 'src/views/README.MD',
      sections: [
        {
          name: 'Services',
          components: 'src/views/Services/*.js',
          exampleMode: 'hide',
          sections: [
            {
              name: 'Service Components',
              components: 'src/views/Services/components/*.js',
              exampleMode: 'hide',
            }
          ]
        }
      ]
    }
  ],
};
