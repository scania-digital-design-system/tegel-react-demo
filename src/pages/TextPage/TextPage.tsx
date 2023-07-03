import { Link } from 'react-router-dom';
import './TextPage.scss';

export default function TextPage() {
  const tegelStorybook: string =
    'https://tegel-storybook.netlify.app/?path=/story/intro-tegel-design-system--tegel-design-system&globals=backgrounds.value:!hex(F9FAFB)';

  return (
    <div className="text-page-container">
      <tds-divider orientation="vertical"></tds-divider>
      <section>
        <h2 className="tds-headline-02">Test page for text, dividers and links</h2>
        <h5 className="tds-headline-05">
          To help you find Tegel link component, look for word "Tegel" in text below. Dividers can
          be found between each paragraph and on both sides of text. Link to a{' '}
          <tds-link>
            <Link to="/text/subpage-with-a-very-long-title">a subpage to test breadcrumb.</Link>
          </tds-link>
        </h5>
        <p className="tds-body-01">
          18 August.--I am happy to-day, and write sitting on the seat in the churchyard. Lucy is
          ever so much better.
          <tds-link>
            <a href={tegelStorybook}>Tegel</a>
          </tds-link>{' '}
          design system is the best thing. Last night she slept well all night, and did not disturb
          me once. The roses seem coming back already to her cheeks, though she is still sadly pale
          and wan-looking. If she were in any way anæmic I could understand it, but she is not. She
          is in gay spirits and full of life and cheerfulness. All the morbid reticence seems to
          have passed from her, and she has just reminded me, as if I needed any reminding, of that
          night, and that it was here, on this very seat, I found her asleep. As she told me she
          tapped playfully with the heel of her boot on the stone slab and said:--
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          "My poor little feet didn't make much noise then! I daresay poor old Mr.{' '}
          <tds-link underline={false}>
            <a href={tegelStorybook}>Tegel</a>
          </tds-link>{' '}
          would have told me that it was because I didn't want to wake up Geordie." As she was in
          such a communicative humour, I asked her if she had dreamed at all that night. Before she
          answered, that sweet, puckered look came into her forehead, which Arthur--I call him
          Arthur from her habit--says he loves; and, indeed, I don't wonder that he does. Then she
          went on in a half-dreaming kind of way, as if trying to recall it to herself:--
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          "I didn't quite dream of{' '}
          <tds-link disabled underline={false}>
            <a href={tegelStorybook}>Tegel</a>
          </tds-link>
          ; but it all seemed to be real. I only wanted to be here in this spot--I don't know why,
          for I was afraid of something--I don't know what. I remember, though I suppose I was
          asleep, passing through the streets and over the bridge. A fish leaped as I went by, and I
          leaned over to look at it, and I heard a lot of dogs howling--the whole town seemed as if
          it must be full of dogs all howling at once--as I went up the steps. Then I had a vague
          memory of something long and dark with red eyes, just as we saw in the sunset, and
          something very sweet and very bitter all around me at once; and then I seemed sinking into
          deep green water, and there was a singing in my ears, as I have heard there is to drowning
          men; and then everything seemed passing away from me; my soul seemed to go out from my
          body and float about the air. I seem to remember that once the West Lighthouse was right
          under me, and then there was a sort of agonising feeling, as if I were in an earthquake,
          and I came back and found you shaking my body. I saw you do it before I felt you."
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          Then she began to laugh. It seemed a little uncanny to me, and I listened to her
          breathlessly. I did not quite like it, and thought it better not to keep her mind on the
          subject, so we drifted on to other subjects, and Lucy was like her old self again. When we
          got home the fresh breeze had braced her up, and her pale cheeks were really more rosy.
          Her mother rejoiced when she saw her, and we all spent a very happy evening together. 19
          August.--Joy, joy, joy! although not all joy. At last, news of Jonathan. The dear fellow
          has been ill; that is why he did not write. I am not afraid to think it or say it, now
          that I know. Mr. Hawkins sent me on the letter, and wrote himself, oh, so kindly. I am to
          leave in the morning and go over to Jonathan, and to help to nurse him if necessary, and
          to bring him home. Mr. Hawkins says it would not be a bad thing if we were to be married
          out there. I have cried over the good Sister's letter till I can feel it wet against my
          bosom, where it lies. It is of Jonathan, and must be next my heart, for he is in my heart.
          My journey is all mapped out, and my luggage ready. I am only taking one change of dress;
          Lucy will bring my trunk to London and keep it till I send for it, for it may be that ...
          I must write no more; I must keep it to say to Jonathan, my husband. The letter that he
          has seen and touched must comfort me till we meet. Letter, Sister Agatha, Hospital of St.
          Joseph and Ste. Mary, Buda-Pesth, to Miss Wilhelmina Murray.
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          "I write by desire of Mr. Jonathan Harker, who is himself not strong enough to write,
          though progressing well, thanks to God and St. Joseph and Ste. Mary. He has been under our
          care for nearly six weeks, suffering from a violent brain fever. He wishes me to convey
          his love, and to say that by this post I write for him to Mr. Peter Hawkins, Exeter, to
          say, with his dutiful respects, that he is sorry for his delay, and that all of his work
          is completed. He will require some few weeks' rest in our sanatorium in the hills, but
          will then return. He wishes me to say that he has not sufficient money with him, and that
          he would like to pay for his staying here, so that others who need shall not be wanting
          for help.
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          "P. S.--My patient being asleep, I open this to let you know something more. He has told
          me all about you, and that you are shortly to be his wife. All blessings to you both! He
          has had some fearful shock--so says our doctor--and in his delirium his ravings have been
          dreadful; of wolves and poison and blood; of ghosts and demons; and I fear to say of what.
          Be careful with him always that there may be nothing to excite him of this kind for a long
          time to come; the traces of such an illness as his do not lightly die away. We should have
          written long ago, but we knew nothing of his friends, and there was on him nothing that
          any one could understand. He came in the train from Klausenburg, and the guard was told by
          the station-master there that he rushed into the station shouting for a ticket for home.
          Seeing from his violent demeanour that he was English, they gave him a ticket for the
          furthest station on the way thither that the train reached.
        </p>

        <tds-divider></tds-divider>

        <p className="tds-body-01">
          "Be assured that he is well cared for. He has won all hearts by his sweetness and
          gentleness. He is truly getting on well, and I have no doubt will in a few weeks be all
          himself. But be careful of him for safety's sake. There are, I pray God and St. Joseph and
          Ste. Mary, many, many, happy years for you both." 19 August.--Strange and sudden change in
          Renfield last night. About eight o'clock he began to get excited and sniff about as a dog
          does when setting. The attendant was struck by his manner, and knowing my interest in him,
          encouraged him to talk. He is usually respectful to the attendant and at times servile;
          but to-night, the man tells me, he was quite haughty. Would not condescend to talk with
          him at all. All he would say was:--
        </p>
      </section>
      <tds-divider orientation="vertical"></tds-divider>
    </div>
  );
}
