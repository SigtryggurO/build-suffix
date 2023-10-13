
# Create suffix action

This action outputs the branch name as a suffix for versioning
if not master or main branch.
Icelandic characters are replaced by their anglicized version,
all other special characters are replaced by with `-` so not
to cause issues in build systems.

## Outputs

### `suffix`

The versioning suffix

### `dashsuffix`

The versioning suffix with a prefixed dash


## Example usage

```yaml
id: setsuffix
uses: SigtryggurO/build-suffix-action@v1.3
```

Can be used in code with
```yaml
  ${{ steps.setsuffix.outputs.suffix }}
```

## How to build action

  npm install
  npm run build
