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

            <h3 className={styles.section_header}>Features for individuals who don't want to be frustrated when using software:</h3>
            <p className={styles.section_paragraph}>
                Not frustrating
                Very simple design, not overwhelming or cluttered
                Can easily navigate back and forth
                Language is clear, simple, and non-technical
                Conventions like symbols and icons that are more familiar to younger generations were not used, 
                for example ellipses or hamburger icons, and instead clearly labeled buttons with text
            </p>

            <h3 className={styles.section_header}>Features for individuals with impaired motor skills:</h3>
            <p className={styles.section_paragraph}>
                Important actions are located close in vicinity to eachother, so that a person doesnt have to move
                around their mouse too much, no complex movements or gestures like click-hold-drag, swiping,
                or holding constantly down on buttons to make things work. nothing that requires a great amount 
                of coordination, large touch targets, keyboard navigation with tab
            </p>

            <h3 className={styles.section_header}>Features for the visually impaired:</h3>
            <p className={styles.section_paragraph}>
                large text, high contrast, light, bright background for people losing sensitivity to brightness
                greys and neutral colors for colorblindness, focus indicators, animations, large touch targets,
                large buttons and input fields
            </p>

            <h3 className={styles.section_header}>Features for the hearing impaired:</h3>
            <p className={styles.section_paragraph}>Screen-reader ready</p>
        </section>
    )

}

export default About