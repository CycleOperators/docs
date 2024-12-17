// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar

//export {default} from '@docusaurus/Noop';

import React from 'react';

export default function SearchBar() {
    // Replace with your <PROJECT_ID>
    const projectId = 'o750bbke2o';
    const headerTitle = 'Documentation chatbot';
    // @ts-ignore: Not a React component
    return <biel-search-button project={projectId} button-style="rounded" header-title={headerTitle}>Search</biel-search-button>;
}
