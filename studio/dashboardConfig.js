export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611054ac21756366ff6a0289',
                  title: 'Sanity Studio',
                  name: 'sanity-premium-digital-studio',
                  apiId: '3cb97e2c-fc6b-43c2-8c7a-5fa5510377f7'
                },
                {
                  buildHookId: '611054ac842ddbc16d5fc3bd',
                  title: 'Blog Website',
                  name: 'sanity-premium-digital',
                  apiId: '546d47d6-4106-42cd-ba69-858157f47d81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennisclemente/sanity-premium-digital',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-premium-digital.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
