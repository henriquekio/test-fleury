module.exports = {
  sections: [
    {
      name: 'Global Components',
      components: 'src/components/**/*.js'
    },
    {
      name: 'View Components',
      sections: [
        {
          name: 'Services',
          components: 'src/components/views/Services/*.js',
          sections: [
            {
              name: 'Service Components',
              components: 'src/components/views/Services/components/*.js'
            }
          ]
        }
      ]
    }
  ],
};
