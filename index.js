const core = require('@actions/core');
const github = require('@actions/github');

try {

    if (github.context.eventName === 'pull_request') {
        console.log('Skipping on pull requests, suffix not set')
        return '';
    }

    const fullBranchName = github.context.payload.ref;
    const branchName = fullBranchName.replace('refs/heads/', '');

    let suffix = '';
    if (fullBranchName !== 'refs/heads/master' && fullBranchName !== 'refs/heads/main') {
        suffix = branchName.replaceAll('Þ', 'Th');
        suffix = suffix.replaceAll('þ', 'th');
        suffix = suffix.replaceAll('Æ', 'Ae');
        suffix = suffix.replaceAll('æ', 'ae');
        suffix = suffix.replaceAll('Ö', 'O');
        suffix = suffix.replaceAll('ö', 'o');
        suffix = suffix.replaceAll('Ð', 'D');
        suffix = suffix.replaceAll('ð', 'd');
        suffix = suffix.replaceAll('Á', 'A');
        suffix = suffix.replaceAll('á', 'a');
        suffix = suffix.replaceAll('É', 'E');
        suffix = suffix.replaceAll('é', 'e');
        suffix = suffix.replaceAll('Í', 'I');
        suffix = suffix.replaceAll('í', 'i');
        suffix = suffix.replaceAll('Ó', 'O');
        suffix = suffix.replaceAll('ó', 'o');
        suffix = suffix.replaceAll('Ú', 'U');
        suffix = suffix.replaceAll('ú', 'u');
        suffix = suffix.replaceAll('Ý', 'Y');
        suffix = suffix.replaceAll('ý', 'y');
        suffix = suffix.replaceAll(/[^0-9a-zA-Z-]/g, '-');
        suffix = `-${suffix}`;
        console.log(`Not main branch, set variable 'suffix' as ${suffix}`)
    }
    else {
        console.log(`Running on ${branchName} branch, no suffix created`)
    }

    core.setOutput('suffix', suffix);
}
catch (error) {
    core.setFailed(error.message);
    console.log("Github context dump: ", github.context);
}