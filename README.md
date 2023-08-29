
# Create suffix action

This action outputs the branch name as a suffix for versioning.
Icelandic characters are replaced by their anglicized version,
all other special characters are replaced by with `-` so not
to cause issues in build systems.

## Outputs

### `suffix`

The versioning suffix

## Example usage

```yaml
id: setsuffix
uses: SigtryggurO/build-suffix-action@v1.2
```

## How to build action

  npm install
  npm run build
