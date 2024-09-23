import styles from '../About/About.module.scss';

const About: React.FC = () => {

    return (
        <section className={styles.section}>
            <h2 className={styles.section_header}>About Movie Finder</h2>
            <p className={styles.section_paragraph}>
                Movie Finder is a movie searching app that was built to be easy to use and accessible!
                Below are some of the features that were built into this app for greater accessibility to 
                individuals of all ages and abilities.
            </p>

            <h3 className={styles.section_header}>Features for individuals who don&apos;t want to be frustrated when using software:</h3>
            <p className={styles.section_paragraph}>
                The design prioritizes simplicity and ease of use to avoid frustration. 
                It features a clean, uncluttered layout, allowing users to navigate back and forth effortlessly. 
                The language is kept clear, simple, and non-technical. 
                Familiar symbols or icons often targeted at younger generations, like ellipses or hamburger menus, are avoided. 
                Instead, the interface uses clearly labeled buttons with text to enhance understanding and usability for all users.
            </p>

            <h3 className={styles.section_header}>Features for individuals with impaired motor skills:</h3>
            <p className={styles.section_paragraph}>
                Important actions are placed close to each other, minimizing the need for excessive mouse movement. 
                The design avoids complex gestures or actions, such as click-and-drag, swiping, or holding buttons down 
                for extended periods of time. There are also no tasks that demand high levels of coordination. 
                The interface includes large touch targets and supports easy keyboard navigation with the tab key, 
                ensuring accessibility for users with limited motor skills.
            </p>

            <h3 className={styles.section_header}>Features for the visually impaired:</h3>
            <p className={styles.section_paragraph}>
                The design includes large text and high contrast to ensure readability, with a light-colored, 
                bright background to aid those losing sensitivity to brightness. 
                For individuals with colorblindness, greys and neutral colors are used to enhance visibility. 
                Additionally, large touch targets, buttons, and input fields are provided to make 
                interaction easier for users with visual impairments.
                The design relies on semantic HTML to allow screen-reading software to easily navigate the application.
            </p>
        </section>
    )

}

export default About