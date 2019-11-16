export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5dcfbe207e7124344f117003',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-starter-blog-studio-cu893m3u',
                  apiId: '7ade5cfa-a236-48ac-bd8c-003af4810de9'
                },
                {
                  buildHookId: '5dcfbe202597f659575d64e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-starter-blog-web',
                  apiId: 'a5d4521b-e1b5-4f0d-8762-14fdee29e8b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codingMot/sanity-gatsby-starter-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-starter-blog-web.netlify.com', category: 'apps'}
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
