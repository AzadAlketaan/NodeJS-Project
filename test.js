/** Leason 01 */
/*const great = (name) => {
    console.log(`Hello! ${name}`);
};

great('azad');*/


/** Leason 04 */

const fs = require('fs');

// reading files
/*fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) console.log(err);
    else console.log(data.toString());
});

// writing files
fs.writeFile('./docs/blog1.txt', 'Azad Writing new file', () => {
    console.log('file was written');
})
*/
// directories

if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets', err, () => {
        if(err) console.log(err);
        else console.log('Folder is created');
    })
}
