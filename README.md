<div align="center">
  <br />
  <p>
    <a href="https://github.com/eddaproject/edda"><img src="https://avatars.githubusercontent.com/u/225482234?s=400&u=2b6b5dd0cc1aeaa0efd186f90dc8cd54b075e682&v=4" width="200" alt="edda logo" /></a>
  </p>
  <br />
</div>

---

## About Edda

Edda is a powerful, language-agnostic subjective testing framework. It's designed to help you create, run, and analyze tests that involve subjective or "fuzzy" evaluations, which are often difficult to assess with traditional testing methods. Edda is particularly well-suited for evaluating the performance of AI and NLP models, but its flexible architecture makes it adaptable to a wide range of use cases.

## Key Features

*   **Subjective Testing:** Go beyond simple pass/fail. Edda allows you to define and measure nuanced, subjective qualities.
*   **Language-Agnostic:** Test systems that work with any human language.
*   **Modular Architecture:** Edda's components are designed to be flexible and extensible. Use only the parts you need, or create your own.
*   **NLP-Powered:** Leverage the power of Natural Language Processing for sophisticated test analysis.
*   **CLI and API:** Interact with Edda through a convenient command-line interface or integrate it into your own applications with a comprehensive API.
*   **Customizable Reporting:** Generate detailed reports to help you understand your test results.

## Architecture

Edda is a monorepo built with TypeScript. It's divided into several packages:

*   **`@edda/core`**: The heart of Edda. It contains the core logic for defining and running subjective tests.
*   **`@edda/nlp`**: Provides a suite of NLP utilities for analyzing test data, including Named Entity Recognition (NER) and other linguistic features.
*   **`@edda/cli`**: A command-line interface for interacting with Edda.
*   **`@edda/reporter`**: Responsible for generating reports from your test results.
*   **`@edda/adapters`**: A set of adapters for integrating Edda with various data sources and external tools.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or higher)
*   [pnpm](https://pnpm.io/) (v9 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/eddaproject/edda.git
    ```
2.  Install the dependencies:
    ```bash
    pnpm install
    ```
3.  Build the packages:
    ```bash
    pnpm build
    ```

## Usage

To run Edda, use the CLI package:

```bash
pnpm --filter @edda/cli start -- --help
```

This will display the available commands and options.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please read our [contributing guidelines](https://github.com/eddaproject/edda/blob/main/.github/CONTRIBUTING.md).

## License

Edda is licensed under the [MIT License](https://github.com/eddaproject/edda/blob/main/LICENSE).