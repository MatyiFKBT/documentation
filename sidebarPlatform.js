module.exports = {
  someSidebar: [
    'what_is_tolgee',
    'introduction',
    {
      label: 'Usage',
      type: 'category',
      items: [
        'creating_project',
        'integration',
        'api-keys-and-pat-tokens',
        'exporting_translations',
        'translation_tools',
        'namespaces',
      ],
    },
    {
      label: 'Self hosting',
      type: 'category',
      items: [
        'self_hosting/running_with_docker',
        'self_hosting/running_with_java',
        'self_hosting/configuration',
      ],
    },
    'icu_message_format',
  ],
};
