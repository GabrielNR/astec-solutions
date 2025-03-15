// import { MonthRevenueCard } from './components/month-revenue-card'
// import { MonthOrdersAmountCard } from './components/month-orders-amount-card'
// import { DayOrdersAmountCard } from './components/day-orders-amount-card'
// import { MonthCanceledOrdersAmountCard } from './components/month-canceled-orders-amount-card'
// import { RevenueChart } from './components/revenue-chart'
// import { PopularProductsChart } from './components/popular-products-chart'

import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";

export function Status() {
  const [finished, setFinished] = useState(false)

  return (
    <>
      <title>Service | Astec Solutions</title>
      
      <div className="justify-center items-center">
        <div className="relative rounded-2xl mt-4 p-24 pt-0">
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

          <div className="space-y-2 mt-4 mb-8">
            <Label htmlFor="description">Descrição do Problema</Label>
            <Textarea placeholder="Digite aqui o problema do equipamento" rows={10}/> 
          </div>


          {finished === true ?
          <Button /*disabled={isSubmitting}*/variant="outline" className="w-full space-y-2 mt-4" type="submit">
            Finalizado
          </Button> : <div />
          }
          <Button /*disabled={isSubmitting}*/ className="w-full space-y-2 mt-4" type="submit">
            Conferir status
          </Button>
      
        </div>
      </div>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <a href="https://wa.me/556792370306?text=Adorei%20seu%20artigo"
          style={{position: "fixed", width: 60, height:60, bottom:40, right: 40, backgroundColor: "#25d366", color: "#FFF", borderRadius: 50, textAlign: "center", fontSize: 30, boxShadow: "1px 1px 2px #888", zIndex: 1000}}
          target="_blank"
        >
          <i style={{marginTop: 16}} className="fa fa-whatsapp">
          
        </i>
      </a>
    </>
  )
}