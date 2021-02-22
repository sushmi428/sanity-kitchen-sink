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
                  buildHookId: '603335a350dc583784751f5f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k9sb5gww',
                  apiId: 'e484af51-061a-4dfb-b717-cc3c57f05d79'
                },
                {
                  buildHookId: '603335a3d1886a5f7c8e5e6e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gmoafoii',
                  apiId: '598a163b-ab88-4aba-8368-1b2ed7ec34ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sushmi428/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gmoafoii.netlify.app', category: 'apps'}
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
