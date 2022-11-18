module.exports = {
  someSidebar: [
    ['understanding_tolgee_for_web'],
    {
      id: 'wrapping',
      type: 'doc',
    },
    {
      id: 'configuration',
      type: 'doc',
    },
    {
      id: 'in_context',
      type: 'doc',
    },
    {
      id: 'automated_screenshot_generation',
      type: 'doc',
    },
    {
      label: 'Integrations',
      collapsed: false,
      type: 'category',
      items: [
        {
          label: 'Vanilla HTML + JS',
          type: 'category',
          items: [
            'get_started/hello_world',
            'get_started/preparing_for_production',
            'get_started/adding_loading_overlay',
            'get_started/translating_imperatively',
            'get_started/providing_default_value',
            'get_started/parameter_interpolation',
          ],
        },
        {
          label: 'Using with Npm',
          type: 'category',
          items: ['using_with_npm/installation'],
        },
        {
          label: 'Using with React',
          type: 'category',
          items: [
            'using_with_react/installation',
            'using_with_react/translating',
            'using_with_react/tags_interpolation',
            'using_with_react/switching_languages',
            'using_with_react/preparing_for_production',
            {
              label: 'Server Side Rendering (SSR)',
              type: 'category',
              items: [
                'using_with_react/ssr/ssr',
                'using_with_react/ssr/using_with_next',
                'using_with_react/ssr/using_with_gatsby',
              ],
            },
            'using_with_react/api',
          ],
        },
        {
          label: 'Using with Angular',
          type: 'category',
          items: [
            'using_with_angular/installation',
            'using_with_angular/translating',
            'using_with_angular/switching_language',
            'using_with_angular/angular_preparing_for_production',
            'using_with_angular/api',
          ],
        },
        {
          label: 'Using with Vue',
          type: 'category',
          items: [
            'using_with_vue/installation',
            'using_with_vue/translating',
            'using_with_vue/switching_languages',
            'using_with_vue/preparing_for_production',
            'using_with_vue/api',
          ],
        },
        {
          label: 'Using with Svelte',
          type: 'category',
          items: [
            'using_with_svelte/installation',
            'using_with_svelte/translating',
            'using_with_svelte/switching_language',
            'using_with_svelte/preparing_for_production',
            'using_with_svelte/api',
          ],
        },
        {
          label: 'Using with i18next',
          type: 'category',
          items: [
            'using_with_i18next/installation',
            'using_with_i18next/react',
            'using_with_i18next/vue',
            'using_with_i18next/preparing_for_production',
            'using_with_i18next/api',
          ],
        },
        {
          label: 'Changelog',
          type: 'category',
          items: [
            { type: 'doc', id: 'changelog/tolgee_js_version_4' },
            { type: 'doc', id: 'changelog/tolgee_js_version_3' },
          ],
        },
        // {
        //   id: 'using_with_php',
        //   type: 'doc',
        // },
        // {
        //   id: 'using_with_dart',
        //   type: 'doc',
        // },
      ],
    },
  ],
};
