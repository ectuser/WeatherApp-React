import { FavoriteLink } from "../../components/FavoriteLink/FavoriteLink";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Time } from "../../components/Time/Time";
import { Container } from "../Container/Container";
import s from './Header.module.css'

export const Header = () => (
    <header className={s.header}>
        <Container className={s.container}>
            <div className={s.time}>
                <Time/>
            </div>
            <div className={s.search}>
                <SearchForm />
            </div>
            <div className={s.favorite}>
                <FavoriteLink/>
            </div>
        </Container>
    </header>
)