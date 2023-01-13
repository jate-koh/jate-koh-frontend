import path from 'path';

module.exports = {
    'presets': [
        [
          '@babel/preset-react',
          {
            'pragma': 'dom',
            'pragmaFrag': 'DomFrag',
            'throwIfNamespace': false,
            'runtime': 'classic'
          }
        ],

        [
            '@babel/preset-env',
            {
              'useBuiltIns': 'entry',
              'corejs': '3.22',
              'modules': 'auto'
            }
        ],

        [
            '@babel/preset-typescript',
            {
                'isTSX': true,
                'allExtensions': true,
            }
        ]
      ],

      'plugins': [
        [ 'inline-dotenv', { 
            path: './.env' 
        }],
        '@babel/plugin-transform-typescript', 
    ]
}