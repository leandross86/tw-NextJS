import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, Container } from '@material-ui/core'
import { FormElementContainer, ProfissionaisPaper, ProfissionaisContainer } from 'ui/styles/pages/index.style'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
          />

          <Typography color={'error'}>CEP Inválido</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
            <UserInformation
              name={'Leandro'}
              picture={'https://github.com/leandross86.png'}
              rating={3}
              description={'Rio das Ostras'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>

    </div>
  )
}
