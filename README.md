# deno-csv2embeddings

`deno-csv2embeddings` is a tool that allows the creation of embeddings from CSV data, utilizing OpenAI's API.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/deno-csv2embeddings)](https://github.com/Kazuki-tam/deno-csv2embeddings/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/deno-csv2embeddings)](https://github.com/Kazuki-tam/deno-csv2embeddings/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/deno-csv2embeddings)

## Features
- Create embeddings by OpenAI embeddings API and LangChain
- Generate `vectors.tsv` and `metadata.tsv` from CSV data
- Develop and build files locally with Deno

## Main dependencies

- [OpenAI API](https://beta.openai.com/docs/api-reference/introduction)
- [LangChain](https://js.langchain.com/docs/)

## Prerequisites

- [OpenAI account](https://openai.com/api/)
- [Deno v1.32.5 or higher](https://deno.land/)

[🦕 How to install Deno](https://deno.land/manual@v1.29.4/getting_started/installation)


## How to use

Creating a repository from this template and cloning the repository.

### Create a .env file

Create a .env at the root, and then Add your OpenAI API key.

```
OPENAI_API_KEY=<YOUR-API-KEY>
```

### Preparing a CSV file

To get ready for the next step, please create a CSV file.
Assuming the data is prepared in Google Sheets, we will proceed with the explanation.

First, the column items for data entry should be Label and Description. Label and Description should be tied together one-to-one.

![sheet](https://user-images.githubusercontent.com/36143987/233895900-c0d59e9b-956e-487b-a343-05ebd458cd40.png)

Download the target sheet as a CSV file; the CSV file should be stored in the data folder.

### Generate `vectors.tsv` and `metadata.tsv`

The following build command will generate `vectors.tsv` and `metadata.tsv` in the dist folder.

```shell
deno task build
```

- `vectors.tsv`: Embeddings data
- `metadata.tsv`: Labels data

You can visualize the embedding using those generated files and Embedding Projector.

[📊 Embedding Projector](https://projector.tensorflow.org/)

## LangChain
LangChain is a framework for developing applications powered by language models. 

[📖 Learn more LangChain - OpenAIEmbeddings](https://js.langchain.com/docs/api/embeddings_openai/classes/OpenAIEmbeddings)

## License
MIT