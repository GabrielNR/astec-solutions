// import { MonthRevenueCard } from './components/month-revenue-card'
// import { MonthOrdersAmountCard } from './components/month-orders-amount-card'
// import { DayOrdersAmountCard } from './components/day-orders-amount-card'
// import { MonthCanceledOrdersAmountCard } from './components/month-canceled-orders-amount-card'
// import { RevenueChart } from './components/revenue-chart'
// import { PopularProductsChart } from './components/popular-products-chart'

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";


export function Dashboard() {
  return (
    <>
      <title>Dashboard | Astec Solutions</title>

      <div className="grid grid-cols-2 antialiased">
      <div className="h-full p-4 pt-20 text flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-3 text-foreground">
            <h1 className="font-bold text-5xl mt-2">Seja bem vindo, ao nosso HelpDesk!</h1>
            <span className="text-2xl mt-4 text-muted-foreground">
              Consulte o status do serviço solicitado 
              e solicite novos serviços
            </span>
          </div>
          <div className="flex flex-initial gap-4 mt-8">
            <Button variant="outline">Conferir Status</Button>
            <Button variant="default">Solicitar Serviço</Button>
          </div>
        </div>
       
        
        
        
      </div>

      <div className="min-h-[654px] flex flex-col relative rounded-2xl mt-16 p-10">
        <span className="font-bold text-xl">Solicite um Serviço</span>

        <div className="space-y-2 mt-4">
          <Label htmlFor="email">Seu Nome</Label>
          <Input id="email" type="email" /> 
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="number">Numero</Label>
          <Input id="numero" type="number" /> 
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="equipament">Equipamento</Label>
          <Input id="equipament" type="text" /> 
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="description">Descrição do Problema</Label>
          <Textarea placeholder="Digite aqui o problema do equipamento" rows={10}/> 
        </div>

        <Button /*disabled={isSubmitting}*/ className="w-full space-y-2 mt-4" type="submit">
          Enviar chamado
        </Button>
    
      </div>
    </div>
      
      {/* <div className="flex flex-col gap-4"> */}
        {/* <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1> */}

        {/* <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div> */}

        {/* <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div> */}
      {/* </div> */}
    </>
  )
}